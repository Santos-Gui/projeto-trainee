export function Gallery({
	image,
	alt,
	text,
	text2,
}: {
	image: string;
	alt: string,
	text: string,
	text2: string;
}) {
	return (
		<div className={`flex justify-center flex-row`}>
			<div className="flex-1">
				<div className="m-1">
					<img src={image} alt={alt} className="m-3 mb-0 h-48 w-83 rounded-xl"/>
				</div>
				<div className="p-4 pb-14 w-full">
					<h1 className="flex justify-center text-1 font-bold">{text2}</h1>
					<p className="bg-orange-300 font-sans text-1 text-justify shadow-2xl shadow-orange-800 transform transition-transform hover:scale-105 p-2 rounded-2xl"> {text}
					</p>
				</div>
			</div>
		</div>
	);
}