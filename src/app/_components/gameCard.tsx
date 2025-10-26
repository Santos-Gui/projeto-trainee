export function GameCard({ name, image }: {
    name: string, image: string
}) {
    return (
        <div className="">
            <img src={image} alt={name} className="max-h-3/4 rounded-2xl"/>
        </div>
    )
}