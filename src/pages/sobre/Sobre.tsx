// import { Link, useNavigate } from 'react-router-dom'
import sobreLogo from "../../assets/ong.png"
import sobreLogoAna from "../../assets/ana.jpeg"
import sobreLogoBreno from "../../assets/breno.jpeg"
import sobreLogoNayane from "../../assets/nayane.jpeg"
import sobreLogoEwerton from "../../assets/ewerton.jpg"
import sobreLogoLuis from "../../assets/luis.png"

function Sobre() {
    return (
        <>
            <div className="bg-gradient-to-r from-orange-400 to-blue-500 py-12">
                <div className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-md text-center">
                    <h1 className="text-4xl font-bold mb-6 text-blue-800">SOBRE NÓS</h1>
                    <p className="text-blue-600 mb-6 font-semibold">
                    Bem-vindo ao ImpactHub, uma plataforma dedicada a conectar organizações não governamentais (ONGs) e promover ações altruístas. Na ImpactHub, acreditamos no poder da colaboração para criar mudanças significativas em comunidades ao redor do mundo.
                    </p>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                    <div className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-md text-center">
                        <h1 className="text-2xl font-bold mb-4 text-blue-800">Nossa Missão</h1>
                        <p className="text-blue-600 mb-6 font-semibold">
                        Nossa missão é oferecer um espaço onde ONGs podem compartilhar ideias, recursos e paixões. Ao unir forças, podemos construir um futuro mais justo e solidário para todos. Junte-se a nós no ImpactHub e faça parte desta rede global de agentes de mudança comprometidos com a transformação social.
                        </p>
                        <img src={sobreLogo} alt="Nossa equipe" className="w-full h-full object-cover rounded-md" />
                    </div>
                </div>

                {/* Conheça nosso time */}

                <div className="mt-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-800">Conheça o Nosso Time</h2>
                </div>
                <div className="flex justify-center">
                    <div className="px-14 text-center">
                        <img src={sobreLogoAna} alt="ana" className="w-20 h-20 object-cover rounded-full mb-2" />
                        <p className="text-black-600 text-center font-bold">Ana Paula</p>
                    </div>
                    <div className="px-14 text-center">
                        <img src={sobreLogoBreno} alt="breno"className="w-20 h-20 object-cover rounded-full mb-2" />
                        <p className="text-black-600 text-center font-bold">Breno Menezes</p>
                    </div>
                    <div className="px-14 text-center">
                        <img src={sobreLogoNayane} alt="nayane"className="w-20 h-20 object-cover rounded-full mb-2" />
                        <p className="text-black-600 text-center font-bold">Nayane Rosa</p>
                    </div>
                    <div className="px-14 text-center">
                        <img src={sobreLogoEwerton} alt="ewerton"className="w-20 h-20 object-cover rounded-full mb-2" />
                        <p className="text-black-600 text-center font-bold">Ewerton Gustavo</p>
                    </div>
                    <div className="px-14 text-center">
                        <img src={sobreLogoLuis} alt="luis"className="w-20 h-20 object-cover rounded-full mb-2" />
                        <p className="text-black-600 text-center font-bold">Luís Felipe</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sobre