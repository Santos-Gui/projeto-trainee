"use client"
import { useState, type JSX } from "react";

export function GamesCarousel({gamesList}: {gamesList: Array<JSX.Element>}) {

    const games = gamesList;

    const [currentGame, setGame] = useState(0);

    return (
        <>
            <div className="flex flex-col bg-gray-800 mx-5 py-5 rounded-xl">
                <h2 className="text-white m-5 text-center text-4xl bg-gray-800">Encontre seu novo Jogo favorito</h2>
                <div className="relative">
                    <div className="flex w-full px-15 items-center">
                        <button onClick={() => setGame(currentGame < games.length - 1 ? currentGame + 1 : 0)} className="absolute right-15 ">
                            <svg className="w-15 h-30 text-white dark:text-gray-800 m-1 p-5 bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg></button>
                        {games[currentGame]}
                        <button onClick={() => setGame(currentGame == 0 ? games.length - 1 : currentGame - 1)} className="absolute">
                            <svg className="w-15 h-30 text-white dark:text-gray-800 m-1 p-5 bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}