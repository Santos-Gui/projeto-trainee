export function InfoCard({
	image,
	alt,
	title,
	text,
	reverse = false,
}: {
	image: string;
	alt: string;
	title: string;
	text: string;
	reverse?: boolean;
}) {
	return (
		<div
			className={`flex min-w-full flex-row ${reverse ? "flex-row-reverse" : ""}`}
		>
			<img src={image} alt={alt} className="m-5 max-w-1/3 rounded-xl" />
			<div className="m-5 flex w-full flex-col items-center justify-between rounded-xl bg-gray-800 p-5 text-white">
				<h3 className="font-[Open_Sans] text-4xl font-bold">{title}</h3>
				<div className="flex flex-grow items-center p-5">
					<p className="text-xl">{text}</p>
				</div>
			</div>
		</div>
	);
}
