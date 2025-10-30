"use client"
import { Header } from "./_components/header";
import { InfoCard } from "./_components/infoCard";
import { GamesCarousel } from "./_components/gamesCarousel";
import { GameCard } from "./_components/gameCard";
import { Footer } from "./_components/footer";

export default function Home() {
    return(
        <main className="bg-linear-to-r from-orange-400 via-orange to-orange-400">
            <Header/>

            <div className="">
                <div className="flex flex-col items-center justify-center max-h- h-dvh">
                    <h1 className="font-bold text-5xl font-[Georgia]">MyGamesList</h1>
                    <h6 className="italic text-m font-[Georgia]">Our Games. Our Community</h6>
                </div>
            </div>

            <div>
                <InfoCard image="https://plus.unsplash.com/premium_vector-1682310703468-80b49ebd750e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="Vários perfis conectados a uma plataforma" title="Participe de uma comunidade" text="Junte-se a milhares de jogadores apaixonados! Compartilhe suas experiências, troque dicas e descubra novos jogos ao redor do mundo. Seja parte de discussões vibrantes e participe de eventos exclusivos que conectam gamers de todas as idades. Crie laços, faça amigos e mergulhe em um ambiente acolhedor onde todos compartilham o amor pelos videogames. Não jogue sozinho — venha fazer parte da nossa comunidade!"/>
                <InfoCard reverse={true} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.howtogeekimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F06%2F52781464329_36035301f1_o.jpg&f=1&nofb=1&ipt=4f3d7ca0c3353bafe211e2ed8aabdf36b2f090f88d70bdbfb2f71c5b3486c282" alt="Foto de uma tela de computador com várias capas de jogos" title="Gerencie sua biblioteca" text="Organize sua coleção de jogos de forma fácil e intuitiva! Adicione, remova e categorize seus títulos favoritos com apenas alguns cliques. Crie listas personalizadas para acompanhar o que você já jogou, o que está jogando e o que deseja experimentar. Mantenha-se atualizado com os últimos lançamentos e receba recomendações baseadas no seu gosto. Transforme sua experiência de jogo com uma biblioteca digital que coloca você no controle!"/>
                <InfoCard image="https://plus.unsplash.com/premium_vector-1718949643032-55a19f32f7d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="Garoto segurando um troféu" title="Compita com seus amigos" text="Entre no clima da competição e desafie seus amigos em emocionantes partidas! Crie torneios personalizados, compare seus rankings e vença desafios únicos. Mostre suas habilidades em diversos jogos, desde clássicos até os mais recentes lançamentos. Participe de eventos especiais, ganhe prêmios e conquistas exclusivas, e mantenha-se conectado com amigos enquanto se diverte. Com nossa plataforma, a rivalidade nunca foi tão divertida!"/>
                <InfoCard reverse={true} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Frating-review-illustration-with-men-women-give-stars_100333-158.jpg%3Fw%3D2000&f=1&nofb=1&ipt=b7e7b90dccbc28ed45ad99a7789b845cd93424cf07825bde6b1de511da002600" alt="Pessoas avaliando um serviço online" title="Avalie e Compartilhe" text="Compartilhe suas opiniões e experiências sobre os jogos que você ama! Deixe avaliações úteis e escreva críticas detalhadas para ajudar outros jogadores a tomarem suas decisões. Junte-se a discussões sobre o que torna cada jogo único e contribua para uma comunidade de gamers informados e apaixonados."/>
            </div>

            <GamesCarousel gamesList={[
                    <GameCard name="Hades 2" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F12%2Fhades-2-roguelike-gameplay.jpg&f=1&nofb=1&ipt=3ce1ad8d7d0cb9eda2ca9e09e917ee8d8a1e925a68afcd3baa8fed10ecf0327b" />,
                    <GameCard name="Hollow Knight Silksong" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F04%2Fhollow-knight-silksong-cover.jpg&f=1&nofb=1&ipt=c1d6edf4a13ead35d471efd578d5687ceb09406555ea79a3baee084810f86ffe" />,
                    <GameCard name="Zelda Breath of the Wild" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fsoftware%2Fswitch%2F70010000000025%2F7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58&f=1&nofb=1&ipt=5528daa00c4b47c70cda34ce8481f9a8b274907a3bfc0b692fb247b7455bb9b0" />,
                    <GameCard name="Zelda Tears of the Kingdom" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fciberninjas.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fzelda-totk-fondos-pc-portada.webp&f=1&nofb=1&ipt=1d4704038dce01ff474fe7a2dead9da4c865f66370153b8bd83cfaf26998abd5" />
            ]}/>
            <Footer/>    
        </main>
    )
}