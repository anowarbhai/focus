
export default function Button({btnText}) {
  return (
    <button className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group">
        <span className="absolute w-full inset-0 h-full bg-gradient-to-br from-accent via-accent_secondary to-accent"></span>
        <span className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#cb52ff] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="text-white text-sm uppercase tracking-[1px] z-[2]">{btnText}</span>
    </button>
  )
}
