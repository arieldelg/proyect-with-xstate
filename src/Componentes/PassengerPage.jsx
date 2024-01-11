import { NameCard } from "./NameCard"
import { useFormik } from "formik"
import * as Yup from 'yup'

const PassengersPage = ({ send, state }) => {
    const formik = useFormik({
        initialValues: {
            id: 0,
            name: '',
            lastName: '',
            age: 0,
            genre: '',
            phone: '',
            email: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().min(3),
            lastName: Yup.string().min(3),
            age: Yup.number().moreThan(0),
            email: Yup.string().required()
        }),

        onSubmit: (values) => {
            values.id = formik.submitCount 
            let newObj = {...values}
            // const toUpperCase = values.name.toLocaleUpperCase()
            send({ type: 'ADD', newString: newObj})
            values.name = ''
            values.lastName = ''
            values.age = 0
            values.genre = ''
            values.phone = ''
            values.email = ''
            newObj = {}
        }
    })
    const toticketsPage = () => {
        send({ type: 'CONTINUE'})
    }
    console.log(formik.errors)
    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col py-2 w-full">
            <h1 className="text-4xl font-bold py-8 w-full">Pasajeros</h1>
            <div>
                <div>
                    <label 
                    htmlFor="name"
                    className="text-xl"
                    >Nombre</label>
                    <input 
                    id="name"
                    type="text" 
                    placeholder="Nombre Completo" 
                    className="w-full px-2 h-8 text-lg rounded-md my-2" 
                    onChange={formik.handleChange} 
                    value={formik.values.name}
                    />
                    <label 
                    htmlFor="lastName"
                    className="text-xl"
                    >Apellidos</label>
                    <input 
                    id="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    type="text" 
                    placeholder="Escribe tu Apellido" 
                    className="w-full px-2 h-8 rounded-md text-lg my-2"
                    />
                </div>
                <div className="flex justify-between items-center pr-8">
                    <div>
                        <label htmlFor="age" className="text-xl pr-4">Edad</label>
                        <input type="number" placeholder="Escribe tu Edad" className="text-lg h-8 px-2 rounded-md" id="age" value={formik.values.age} onChange={formik.handleChange}/>
                    </div>
                    <div>
                        <p className="text-xl">Genero</p>
                        <input type="radio" id="masculino" name="genre" value={'masculino'} onChange={formik.handleChange}/>
                        <label htmlFor="masculino" className='text-[18px] px-2'>Masculino</label>
                        <input type="radio" id="femenino" name="genre" value={'femenino'} onChange={formik.handleChange}/>
                        <label htmlFor="femenino" className="text-[18px] px-2">Femenino</label>
                        <input type="radio" id="otro" name="genre" value={'otros'} onChange={formik.handleChange}/>
                        <label htmlFor="otro" className="text-[18px] px-2">Otro</label>
                    </div>
                </div>
                <div className="flex justify-between items-center pr-4 py-4">
                    <div className="w-[350px] flex flex-col">
                        <label htmlFor="email" className="text-xl pr-4">Correo</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="Correo Electronico" 
                        className="h-8 px-2 rounded-md text-lg w-[250px]" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label 
                        htmlFor="phone" 
                        className="text-xl pr-2"
                        >Celular</label>
                        <input 
                        type="text"
                        placeholder="Telefono Celular" 
                        className="text-lg rounded-md h-8 px-2"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="px-1 py-4 w-full">
                {
                    state.context.toPassengers.map((element) => {
                        
                        return <NameCard data={element} key={element.id} send={send}/>
                    })
                }
            </div>
            <div className="flex mt-6 justify-between">
                <button 
                type="submit"
                className={`text-xl font-semibold text-white bg-opacity-60 px-6 py-1  rounded-md bg-purple-600 hover:bg-purple-700`}
                >Agregar Nuevo Passajero</button>
                <button 
                onClick={toticketsPage}
                className={`text-2xl font-semibold text-white bg-opacity-60 px-6 py-1  rounded-md bg-purple-600 hover:bg-purple-700`}
                >Ver mi ticket</button>
            </div>
        </form>
    )
}

export { PassengersPage }