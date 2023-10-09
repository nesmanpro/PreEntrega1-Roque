


export default function ProdModal({ closeModal }) {


  return (
    <>
      <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-75 transition-opacity">
        <div className="flex flex-col p-9 bg-white shadow-md hover:shodow-lg rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg width="115px" height="115px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#33495F" cx="50" cy="50" r="50"></circle> <clipPath id="a"> <path d="M100 50c0 27.614-22.387 50-50 50-27.614 0-50-22.386-50-50S22.386 0 50 0h50v50z"></path> </clipPath> <g clipPath="url(#a )" fill="#ffffff"> <path opacity=".2" clipPath="url(#a)" d="M31 19.5c2.55-.45 4.051-1.95 4.5-4.5.45 2.55 1.951 4.05 4.5 4.5-2.549.451-4.05 1.95-4.5 4.5-.449-2.55-1.95-4.049-4.5-4.5z"></path> <path opacity=".1" clipPath="url(#a)" d="M71 74.5c2.55-.45 4.051-1.95 4.5-4.5.45 2.55 1.951 4.05 4.5 4.5-2.549.451-4.05 1.95-4.5 4.5-.449-2.55-1.95-4.049-4.5-4.5zm-60-10c2.55-.45 4.051-1.95 4.5-4.5.45 2.55 1.951 4.05 4.5 4.5-2.549.451-4.05 1.95-4.5 4.5-.449-2.55-1.95-4.049-4.5-4.5z"></path> </g> <g clipPath="url(#a)"> <path fill="#E94B35" d="M100 .1c-.156.018-.117.058-.1-.1-23.316 2.979-36.539 12.281-44.035 22.035a50.75 50.75 0 0 0-.782 1.047l-.008.01C47.015 34.196 46.087 45.812 46 49h-1l-1 3 4 4 3-1v-1a39.77 39.77 0 0 0 7.066-.773l.002.002c.729-.182.932.076.932 3.771v9c0 1.809.943 2.497 1.945 1.494 2.423-2.428 3.003-3.023 8.5-8.528 4.16-4.167 4.676-6.595 2.957-11.059C83.953 41.369 96.432 27.888 100 .1z"></path> <path fill="#C23824" d="M48 56l-4-4 1-3h2l4 4v2l-3 1zm4-28c-1.718-.69-2-1-4-1s-4.183 1.38-6.861 4.063c-4.254 4.259-4.85 4.839-8.516 8.508C31.425 40.771 33.263 41 36 41c5.233 0 9.297-.125 10.791 1.42C48.764 44.46 52 28 52 28zm48-28c-.639 4.973-1.566 9.579-2.721 13.678-1.049-1.97-2.562-4.364-4.5-6.272-2.151-2.12-4.812-3.632-6.826-4.585C91.979 1.091 96.783.412 100 0z"></path> <path opacity=".3" fill="#ffffff" d="M72.402 47.907c1.719 4.463 1.312 6.788-2.854 10.954-.844.844-7.828 7.859-8.604 8.633-1.003 1.002-1.911.315-1.944-1.494v-.652c3-3 9.689-8.938 11-11.348.768-1.411.352-3.654 0-5-3.312 1.76-11.516 4.094-11.932 4.229-3.162.646-5.601.714-7.068.771v-.656S80.975 43.681 100 0c-3.594 28.047-16.047 41.369-27.598 47.907z"></path> <path fill="#ffffff" d="M77.5 28c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"></path> <path fill="#C23824" d="M77.5 16a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0-2c-4.137 0-7.5 3.364-7.5 7.5s3.363 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.363-7.5-7.5-7.5z"></path> <path fill="#D7DCDE" d="M44 52l4 4-35 36-6-6 37-34z"></path> <path fill="#F7F7F7" d="M43.875 52l2 2L7.5 91.5l-3-3L43.875 52z"></path> </g> </g></svg>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none">Formulario enviado! 🚀</div>
                <p className="text-sm text-gray-600 leading-none mt-1">Tan pronto como podamos nos pondremos en contacto contigo.
                </p>
              </div>
            </div>
            <button onClick={() => closeModal(false)} className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Cerrar</button>
          </div>
        </div>
      </div>

    </>
  );

}
