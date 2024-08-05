import { FaStar } from 'react-icons/fa'
import { ProductsData } from '../../Data/data'

const Products = () => {
    return (
        <div className='mt-10 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Products for you
                    </p>
                    <h1 className="text-3xl font-bold">
                        Products
                    </h1>
                    <p data-aos="fade-up"  className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>
                {/* Body section */}
                <div>
                    <div
                        className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'
                    >
                        {/* card section */}
                        {
                            ProductsData.map((data) => {
                                return (
                                    <div 
                                    data-aos='fade-up'
                                    data-aos-delay={data.aosDelay}
                                    key={data.id}
                                    className='space-y-3'
                                    >
                                        <img src={data.img}
                                            className='h-[220px] w-[150px] object-cover rounded-md'
                                        />
                                        <div>
                                            <h3 className='font-semibold'>
                                                {data.title}
                                            </h3>
                                            <p className='text-sm text-gray-600'>
                                                {data.color}
                                            </p>
                                            <div 
                                            className='flex items-center gap-1'
                                            >
                                                <FaStar className='text-yellow-400'/>
                                                <span>
                                                    {data.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products