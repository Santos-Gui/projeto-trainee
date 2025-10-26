"use client"
import { useState } from "react";
import { GameCard } from "./gameCard";

export function GamesCarousel() {

    const games = [
        <GameCard name="Hades 2" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F12%2Fhades-2-roguelike-gameplay.jpg&f=1&nofb=1&ipt=3ce1ad8d7d0cb9eda2ca9e09e917ee8d8a1e925a68afcd3baa8fed10ecf0327b" />,
        <GameCard name="Hollow Knight Silksong" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F04%2Fhollow-knight-silksong-cover.jpg&f=1&nofb=1&ipt=c1d6edf4a13ead35d471efd578d5687ceb09406555ea79a3baee084810f86ffe" />,
        <GameCard name="Zelda Breath of the Wild" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fsoftware%2Fswitch%2F70010000000025%2F7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58&f=1&nofb=1&ipt=5528daa00c4b47c70cda34ce8481f9a8b274907a3bfc0b692fb247b7455bb9b0" />,
        <GameCard name="Zelda Tears of the Kingdom" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fciberninjas.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fzelda-totk-fondos-pc-portada.webp&f=1&nofb=1&ipt=1d4704038dce01ff474fe7a2dead9da4c865f66370153b8bd83cfaf26998abd5" />
    ]

    const [currentGame, setGame] = useState(0);

    return (
        <>
            <div className="flex flex-col bg-gray-800 mx-5 py-5 rounded-xl">
                <h2 className="text-white m-5 text-center text-4xl bg-gray-800">Encontre seu novo Jogo favorito</h2>
                <div className="relative">
                    <div className="flex place-items-center w-full px-15 max-h-3/4">
                        <button onClick={() => setGame(currentGame < games.length - 1 ? currentGame + 1 : 0)} className="absolute right-15">
                            <svg className="w-15 h-15 text-white dark:text-gray-800 m-1 p-5 bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg></button>
                        {games[currentGame]}
                        <button onClick={() => setGame(currentGame == 0 ? games.length - 1 : currentGame - 1)} className="absolute">
                            <svg className="w-15 h-15 text-white dark:text-gray-800 m-1 p-5 bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}