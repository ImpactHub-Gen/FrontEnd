// import { Link, useNavigate } from 'react-router-dom'
import sobreLogo from "../../assets/ong.png"
import sobreLogoAna from "../../assets/ana.jpeg"
import sobreLogoBreno from "../../assets/breno.jpeg"
import sobreLogoNayane from "../../assets/nayane.jpeg"
import sobreLogoEwerton from "../../assets/ewerton.jpg"
import sobreLogoLuis from "../../assets/luis.png"
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Sobre() {
    return (
        <>
            <div className='bg-gray py-12 flex flex-col items-center'>
                <div className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-lg text-center">
                    <h1 className="text-4xl font-bold mb-6 text-orange-hl">Sobre nós</h1>
                    <p className="mb-6 font-semibold">
                    Bem-vindo ao ImpactHub, uma plataforma dedicada a conectar pessoas com organizações não governamentais (ONGs), promovendo ações altruístas. Na ImpactHub, acreditamos no poder da colaboração para criar mudanças significativas em comunidades ao redor do mundo.
                    </p>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                    <div className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-lg text-center">
                        <h1 className="text-4xl font-bold mb-4 text-orange-hl">Missão</h1>
                        <p className="mb-6 font-semibold">
                        Nossa missão é oferecer um espaço onde ONGs podem compartilhar ideias, recursos e paixões. Ao unir forças, podemos construir um futuro mais justo e solidário para todos. Junte-se a nós no ImpactHub e faça parte desta rede global de agentes de mudança comprometidos com a transformação social.
                        </p>
                        <img src="https://cdn.discordapp.com/attachments/1180165078037827635/1204638679679897700/4.png?ex=65d57632&is=65c30132&hm=5447613ae4f6bce0308713aef42aedb924e3fcc30671a231169f56f687ec2f3b&" alt="Nossa equipe" className="w-full h-80 object-cover rounded-md" />
                    </div>
                </div>

                {/* Conheça nosso time */}
                <div className="bg-white max-w-6xl mt-8 pb-8 rounded-md shadow-lg">
                    <div className="mt-2 text-center">
                        <h2 className="text-3xl font-bold mb-12 mt-8 text-orange-hl">Conheça o Nosso Time</h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="px-14 text-center flex flex-col items-center">
                            <img src={sobreLogoAna} alt="ana" className="w-20 h-20 object-cover rounded-full mb-2" />
                            <p className="text-black-600 text-center font-semibold">Ana Paula</p>
                            <div className='grid grid-cols-2 gap-4 mt-2'>
                                <Link to='//linkedin.com/in/ana-mcruz/' target='_blank'><LinkedinLogo size={32} weight='bold'></LinkedinLogo></Link>
                                <Link to='//github.com/anap-moura/' target='_blank'><GithubLogo size={32} weight='bold'></GithubLogo></Link>
                            </div>
                        </div>
                        <div className="px-14 text-center flex flex-col items-center">
                            <img src={sobreLogoBreno} alt="breno"className="w-20 h-20 object-cover rounded-full mb-2" />
                            <p className="text-black-600 text-center font-semibold">Breno Menezes</p>
                            <div className='grid grid-cols-2 gap-4 mt-2'>
                                <Link to='//linkedin.com/in/breno-mnz/' target='_blank'><LinkedinLogo size={32} weight='bold'></LinkedinLogo></Link>
                                <Link to='//github.com/BrenoMnz' target='_blank'><GithubLogo size={32} weight='bold'></GithubLogo></Link>
                            </div>
                        </div>
                        <div className="px-14 text-center flex flex-col items-center">
                            <img src={sobreLogoNayane} alt="nayane"className="w-20 h-20 object-cover rounded-full mb-2" />
                            <p className="text-black-600 text-center font-semibold">Nayane Rosa</p>
                            <div className='grid grid-cols-2 gap-4 mt-2'>
                                <Link to='//linkedin.com/in/nayane-rosa-9b27aa158/' target='_blank'><LinkedinLogo size={32} weight='bold'></LinkedinLogo></Link>
                                <Link to='//github.com/NayaneRosa' target='_blank'><GithubLogo size={32} weight='bold'></GithubLogo></Link>
                            </div>
                        </div>
                        <div className="px-14 text-center flex flex-col items-center">
                            <img src={sobreLogoEwerton} alt="ewerton"className="w-20 h-20 object-cover rounded-full mb-2" />
                            <p className="text-black-600 text-center font-semibold">Ewerton Gustavo</p>
                            <div className='grid grid-cols-2 gap-4 mt-2'>
                                <Link to='//linkedin.com/in/ewerton-gustavo/' target='_blank'><LinkedinLogo size={32} weight='bold'></LinkedinLogo></Link>
                                <Link to='//github.com/Ewerton51' target='_blank'><GithubLogo size={32} weight='bold'></GithubLogo></Link>
                            </div>
                        </div>
                        <div className="px-14 text-center flex flex-col items-center">
                            <img src={sobreLogoLuis} alt="luis"className="w-20 h-20 object-cover rounded-full mb-2" />
                            <p className="text-black-600 text-center font-semibold">Luís Felipe Sibim</p>
                            <div className='grid grid-cols-2 gap-4 mt-2'>
                                <Link to='//linkedin.com/in/luisfelipesibim/' target='_blank'><LinkedinLogo size={32} weight='bold'></LinkedinLogo></Link>
                                <Link to='//github.com/lfsibim' target='_blank'><GithubLogo size={32} weight='bold'></GithubLogo></Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Sobre