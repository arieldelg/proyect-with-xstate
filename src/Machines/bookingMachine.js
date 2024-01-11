import { assign, createMachine, fromPromise } from 'xstate';
import { fetchCountries } from '../Utils/api';

const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: fromPromise(() => fetchCountries()),
        onDone: {
          target: 'success',
          actions: assign({
            countries: ({ event }) => event.output
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'fallo el request'
          })
        }
      }
    },
    failure: {
      on: {
        RETRY: {
          target: 'loading'
        }
      }
    },
    success: {}
  }
}

const bookingMachine = createMachine({
  id: 'buy plane tickets',
  initial: 'inicial',
  context: {
    toPassengers: [],
    selectedCountry: '',
    countries: [],
    error: '',
    info: {}
  },
  states: {
    inicial: {
      on: {
        CONTINUE: {
          target: 'search',
          
        } 
      }
    },
    search: {
      on: {
        CONTINUE: {
          target: 'passengers',
          actions: assign({
            selectedCountry: ({ event }) => event.selectedCountry,
          })
        }, 
        CANCEL: {
          target: 'inicial',
          actions: assign(
            ({ context, event }) => {
              context.toPassengers = event.newValue
            }
          )
        } 
      },
      ...fillCountries,
    },
    passengers: {
      on: {
        CONTINUE: {
          target: 'tickets',
          guard: 'passengersExist'
        },
        CANCEL: {
          target: 'inicial',
          actions: assign(
            ({ context, event }) => {
              context.toPassengers = event.newValue
            }
          )
        },
        ADD: {
          target: 'passengers',
            actions: assign(
              ({ context, event }) => {
                context.toPassengers.push(event.newString)
              }
            )
        },
        DELETE: {
          target: 'passengers',
          actions: assign(
            ({ context, event }) => {
              const find = context.toPassengers.findIndex(element => element === event.findName)
              context.toPassengers.splice(find, 1)
            }
          )
        },
        EDIT: {
          target: 'editPassengers',
          actions: assign(
            ({ context, event}) => {
              context.info = event.newInfo
            }
          )
        },
        BACK: {
          target: 'search',
        }
      }
    },
    tickets: {
      on: {
        FINISH: 'inicial',
        CANCEL: {
          target: 'inicial',
          actions: assign(
            ({ context, event }) => {
              context.toPassengers = event.newValue
            }
          )
        },
        BACK: {
          target: 'passengers'
        }
      }
    },
    editPassengers: {
      on: {
        CONTINUE: {
          target: 'passengers',
          actions: assign(
            ({ context, event }) => {
              const findIndex = context.toPassengers.find(element => element.id === event.newValue.id)
              findIndex.name = event.newValue.name
              findIndex.lastName = event.newValue.lastName
              findIndex.age = event.newValue.age
              findIndex.genre = event.newValue.genre
              findIndex.email = event.newValue.email
              findIndex.phone = event.newValue.phone
            }
          )
        },
        BACK: {
          target: 'passengers',
          actions: assign({
            info: {}
          })
        }
      }
    }
  },
  preserveActionOrder: true,
},
{
  actions: {
    cleanContext: assign({
      toPassengers: [],
      selectedCountry: '',
      info: {},
      countries: []
    })
  },
  guards: {
    passengersExist: ({ context }) => {
      return context.toPassengers.length > 0
    }
  }
}
)

export {bookingMachine}