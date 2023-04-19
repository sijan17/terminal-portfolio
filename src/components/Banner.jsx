import {data} from "../constants/data"
import Typewriter from "../helpers/Typewriter"

export default function Banner(){
	return (
		<>

		<div className="text-green-400 w-full mx-auto text-[5px] md:text-[0.7em] lg:text-[1em] 	pt-8 fade-in-out duration-300 mb-4">
		{data.banner.map((data, i) => <div key={i} className="w-full leading-[1.2]" ><Typewriter delay= {10*i*i} speed={5}>{data}</Typewriter></div>)}
		<div className="text-base mt-4">Type "help" to list commands.</div>
		</div></>

		);
}