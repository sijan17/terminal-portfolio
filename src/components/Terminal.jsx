import { useState, useEffect, useRef } from 'react';
import Banner from './Banner';
import { data } from '../constants/data';
import Typewriter from '../helpers/Typewriter';

const Terminal = () => {
    const [inputValue, setInputValue] = useState();
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [prevCommand, setPrevCommand] = useState('');

    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            inputRef.current.focus();
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, [inputValue, terminalOutput]);

    useEffect(() => {
        if (window.innerWidth > 600) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [inputValue, terminalOutput]);

    const handleInputKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            setInputValue(prevCommand);
            return;
        }
        if (event.key === 'ArrowDown') {
            setInputValue('');
            return;
        }
        if (event.key === 'Enter') {
            const command = inputValue.trim().toLowerCase();
            setPrevCommand(command);
              let output, speed, array;
const regex = /^echo "(.*)"/;
if (regex.test(inputValue)) {
  const match = inputValue.match(regex);
   output = match[1];
    speed = 20;

}else{

          
            switch (command) {
                case 'ls':
                    output = 'message.txt';
                    speed = 20;
                    break;
                case 'sijan':
                    output = 'Redirecting';
                    window.location = 'https://sijan-paudel.com.np';
                    break;
                case 'man':
                case 'help':
                    output = data.help;
                    speed = 0.1;
                    array = true;
                    break;
                case 'social':
                    output = data.social;
                    speed = 0.1;
                    array = true;
                    break;
                case 'twitter':
                    output = 'Redirecting';
                    window.location = 'https://twitter.com/s1j4n';
                    break;
                case 'facebook':
                    output = 'Redirecting';
                    window.location = 'https://facebook.com/paudelsizan';
                    break;
                case 'linkedin':
                    output = 'Redirecting';
                    window.location = 'https://linkedin.com/in/sijan1';
                    break;
                case 'insta':
                    output = 'Redirecting';
                    window.location = 'https://instagram.com/sij4nn';
                    break;
                case 'github':
                    output = 'Redirecting';
                    window.location = 'https://github.com/sijan17';
                    break;
                case 'projects':
                    output = data.projects;
                    speed = 10;
                    break;
                case 'projects r':
                    output = 'Redirecting';
                    window.location = 'https://sijan-paudel.com.np#projects';
                    break;
                case 'who':
                    output = data.who;
                    speed = 20;
                    break;
                case 'password':
                    output = '************';
                    speed = 20;
                    break;
                case 'secret':
                    output = 'Secret is secret :/';
                    speed = 20;
                    break;
                case 'cat message.txt':
                    output = 'Hello There !';
                    speed = 30;
                    break;
                case 'echo':
                    output = inputValue.slice(5);
                    break;
                case 'vim message.txt':
                case 'vi message.txt':
                case 'nano message.txt':
                    output = 'Permission Denied.';
                    speed = 30;
                    break;
                case 'sudo':
                case 'sudo su':
                    output = 'No way! Permission denied.';
                    speed = 30;
                    break;
                case 'clear':
                    setTerminalOutput([]);
                    setInputValue('');
                    return;
                default:
                    output = `Unknown command: ${command}`;
                    speed = 20;
                    break;
            }
        }
            setTerminalOutput((prevOutput) => [...prevOutput, { inputValue, output, speed, array }]);
            setInputValue('');
        }
    };

    return (
        <div className='bg-gray-900 text-white max-w-screen min-h-screen p-4  overflow-hidden pb-[50vh]'>
            <Banner />
            <div className='h-full overflow-auto flex flex-col'>
                {terminalOutput &&
                    terminalOutput.map((output, index) => {
                        return (
                            <div
                                key={`terminal-output-${index}`}
                                className='flex  leading-tight flex-col text-gray-400 gap-2 mb-4'
                            >
                                <div className='text-green-400 font-mono'>┌─[✗]─[guest@s1j4n]─[~]</div>
                                <div className='flex gap-1'>
                                    <div>└──╼ $ </div>

                                    {output.inputValue}
                                </div>
                                <div className='break-words text-xs  md:text-base'>
                                    {output.array ? (
                                        output.output.map((data, index) => {
                                            return (
                                                <span key={index}>
                                                    <Typewriter speed={1} delay={index * 100}>
                                                        {data}
                                                    </Typewriter>
                                                </span>
                                            );
                                        })
                                    ) : (
                                        <Typewriter speed={output.speed & output.speed} delay={0}>
                                            {output.output}
                                        </Typewriter>
                                    )}
                                </div>

                                {/*</Typewriter>*/}
                            </div>
                        );
                    })}
                <div className='flex flex-col' ref={bottomRef}>
                    <div className='text-green-400 font-mono'>┌─[✗]─[guest@s1j4n]─[~]</div>
                    <div className='flex gap-1'>
                        <div>└──╼ $ </div>
                        <input
                            ref={inputRef}
                            type='text'
                            className='flex-1 bg-transparent border-none text-gray-400  outline-none'
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            onKeyDown={handleInputKeyDown}
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
