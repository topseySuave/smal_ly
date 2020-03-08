import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'react-simple-tooltip';
import { toast } from 'react-toastify';

const InputSection = ({ handleSubmit, handleChange, loading, queryRes, openResbox }) => (
    <div className="container mx-auto py-8">
        <div className="flex items-center flex-col mx-auto max-w-2xl">
            <form
                className="w-full flex block shadow-lg appearance-none w-full
                bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight
                hover:bg-blue-700 focus:border-gray-500"
                onSubmit={handleSubmit}
            >
                <input
                    className="focus:outline-none focus:bg-white flex-grow"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter url to shorten"
                    onChange={handleChange}
                />
                <button className="shadow-lg bg-white flex justify-center text-gray-700 p-2 w-10">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </form>

            <div className="w-full rounded bg-white shadow-lg">
                {openResbox &&
                    (<div className="px-6 py-4">
                        {loading ? (<p className="text-grey-500">Generating smal.ly URL...</p>) :
                            queryRes === 'Bad Request' ? <p>{queryRes}: Invalid URL</p> :
                            <>
                                <div className="font-bold text-xl mb-2">Your link is ready</div>
                                <div className="flex justify-between">
                                    <a target="_blank" href={queryRes.shortUrl} className="text-blue text-base">
                                        {queryRes.shortUrl}
                                    </a>

                                    <CopyToClipboard text={queryRes.shortUrl}
                                        onCopy={() => toast('Copied to clipboard')} >
                                        <Tooltip content={<small>Copy To ClipBoard</small>}>
                                            <button className="text-grey">
                                                <FontAwesomeIcon icon={faClipboard} />
                                            </button>
                                        </Tooltip>
                                    </CopyToClipboard>
                                </div>
                            </>
                        }
                    </div>)
                }
            </div>
        </div>
    </div>
);

export default InputSection;