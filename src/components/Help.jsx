import {data} from "../constants/data"
import Typewriter from "../helpers/Typewriter"

export default function Help() {
	return(

			<div className="text-green-400 w-full mx-auto text-[0.5em] md:text-[0.7em] lg:text-[1em] 	pt-8 fade-in-out duration-300">
		{data.help.map((data, i) => <div key={i} className="w-full leading-[1.2]" ><Typewriter delay= {2400+(10*i*i)} speed={10}>{data}</Typewriter></div>)}
		</div>

		)
}