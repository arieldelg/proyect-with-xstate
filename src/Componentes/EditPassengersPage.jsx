import { useFormik } from "formik"



const EditPassengersPage = ({ state, send }) => {
    const { name, lastName, genre, email, age, phone, id } = state.context.info
    // console.log(genre)
    const formik = useFormik({
        initialValues: {
            id: id,
            name: name,
            lastName: lastName,
            genre: genre,
            email: email,
            age: age,
            phone: phone
        },
        onSubmit: (values) => {
            send({ type: 'CONTINUE', newValue: values})
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className="pt-4">
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
                <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="age" className="text-xl pr-4">Edad</label>
                        <input 
                        type="number" 
                        placeholder="Escribe tu Edad" 
                        className="text-lg h-8 px-2 rounded-md" 
                        id="age" value={formik.values.age} 
                        onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <p className="text-xl">Genero</p>
                        <input 
                        type="radio" 
                        id="masculino" 
                        name="genre" 
                        value={'masculino'} 
                        onChange={formik.handleChange}
                        />
                        <label htmlFor="masculino" className='text-[18px] px-2'>Masculino</label>
                        <input 
                        type="radio" 
                        id="femenino" 
                        name="genre" 
                        value={'femenino'} 
                        onChange={formik.handleChange}
                        />
                        <label htmlFor="femenino" className="text-[18px] px-2">Femenino</label>
                        <input 
                        type="radio" 
                        id="otro" 
                        name="genre" 
                        value={'otros'} 
                        onChange={formik.handleChange}
                        />
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
            <button 
            className="text-2xl w-full font-semibold text-white bg-opacity-60 px-6 py-2 mt-4 rounded-md bg-purple-600 hover:bg-purple-700"
            type="submit"
            >Guardar</button>
        </form>
    )
}

export { EditPassengersPage }