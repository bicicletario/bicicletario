import Card from '../components/Card'
import Img1 from '../assets/Bicicleta1.png'
import Img2 from '../assets/Bicicleta2.png'
import Img3 from '../assets/Bicicleta3.png'
import Img4 from '../assets/Bicicleta4.png'

const Home = () => {
    const bicicletas = [
        { id: 1, titulo: "Bicicleta 1", preco: "R$ 59,90", imagem: Img1 },
        { id: 2, titulo: "Bicicleta 2", preco: "R$ 39,90", imagem: Img2 },
        { id: 3, titulo: "Bicicleta 3", preco: "R$ 69,90", imagem: Img3 },
        { id: 4, titulo: "Bicicleta 4", preco: "R$ 119,90", imagem: Img4 }
    ];

    return (
        <main className="px-[5%] mt-10 mb-16 grow bg-[#E5D5C3]">

            <h2 className="titulo text-3xl font-bold text-[#5C493B] mb-8 animate-[fadeIn_0.8s_ease-out]">Bicicletas em Destaque</h2>

            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

                {bicicletas.map((bic, index) => (

                    <div key={bic.id} className="animate-[fadeInUp_0.6s_ease-out_both]" style={{ animationDelay: `${index * 150}ms` }}>

                        <Card
                            titulo={bic.titulo}
                            preco={bic.preco}
                            imagem={bic.imagem}
                        />

                    </div>
                ))}

            </section>

        </main>
    )
}

export default Home