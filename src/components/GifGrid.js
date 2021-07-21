import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    /**
     * En la desustructuracion los dos puntos se usa para renombrarlo
     * data:images -> obitien el data y lo renombra a images
     */
    const { data:images, loading } = useFetchGifs(category);
    
    /**
     * En lugar de enviar la img como tal (lo que implica luego hacer props.img)
     * Usamos spread de img -> ...img
     * Con esto enviamos cada uno de las propiedades del img 
     */
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid