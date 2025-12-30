import { Button } from '@heroui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';




export default function FeedPage() {



  return <>





    <div className="w-xl mx-auto">

      <div className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
        <div className="w-full h-16  items-center flex justify-between ">
          <div className="flex">
            <img className=" rounded-full w-10 h-10 mr-3" src="" alt="" />
            <div>
              <h3 className="text-md font-semibold ">Sudana Kunyung</h3>
              <img src="" alt="" />
            </div>
          </div>
          <svg className="w-16" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
        </div>
        <p>Hai saya junior programer di Bali gatra</p>
        <p>mencoba untuk mengclone facebook dengan Tailwind css</p>
        <div className="w-full h-8 flex items-center px-3 my-3">
          <div className="bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center ">
            <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
          </div>
          <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1">
            <svg className="w-3 h-3 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </div>
          <div className="w-full flex justify-between">
            <p className="ml-3 text-gray-500">8</p>
            <p className="ml-3 text-gray-500">29 comment</p>
          </div>
        </div>

        <div className="grid grid-cols-3 w-full px-5 my-3 border-t pt-3 border-divider">
          <button className="flex flex-row justify-center items-center w-full space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#838383" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
            <span className="font-semibold text-lg text-gray-600">Like</span></button>
          <button className="flex flex-row justify-center items-center w-full space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#838383" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            <span className="font-semibold text-lg text-gray-600">Comment</span></button>
          <button className="flex flex-row justify-center items-center w-full space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#838383" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
            <span className="font-semibold text-lg text-gray-600">Share</span></button>
        </div>



        <div className="flex items-center space-x-2">
          <div className="flex  self-start cursor-pointer">
            <img src="https://images.unsplash.com/photo-1609349744982-0de6526d978b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt className="h-8 w-8 object-cover rounded-full" />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="block">
              <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                <div className="font-medium">
                  <a href="#" className="hover:underline text-sm">
                    <small>Arkadewi</small>
                  </a>
                </div>
                <div className="text-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
                </div>
              </div>
              <div className="flex justify-start items-center text-xs w-full">
                <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                  <a href="#" className="hover:underline">
                    <small>Like</small>
                  </a>
                  <small className="self-center">.</small>
                  <a href="#" className="hover:underline">
                    <small>Reply</small>
                  </a>
                  <small className="self-center">.</small>
                  <a href="#" className="hover:underline">
                    <small>15 hour</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
            <a href="#" className>
              <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
                <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              </div>
            </a>
          </div>
        </div>



      </div>
    </div>


  </>
}
