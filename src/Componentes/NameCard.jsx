import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid'

const NameCard = ({ data, send }) => {
    const deleteName = () => {
        send({ type: 'DELETE', findName: data.name})
    }
    return (
        <div className='flex w-full justify-between pr-12'>
            <div>
                <h1 className="text-xl font-semibold py-1">{data.name} {data.lastName}</h1>
                <div className='flex gap-4 text-sm'>
                    <p><strong>Edad:</strong> {data.age}</p>
                    <p><strong>correo:</strong> {data.email}</p>
                    <p><strong>Telefono:</strong> {data.phone}</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <PencilSquareIcon className='w-6 cursor-pointer' onClick={() => send({ type: 'EDIT', newInfo: data })}/>
                <TrashIcon className='w-6 cursor-pointer' onClick={deleteName}/>
            </div>
        </div>
    )
}

export { NameCard }