import { FC } from 'react'

type HeaderProps = {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="p-4 mb-10 bg-red-500">
      <div className="max-w-5xl m-auto">
        <div className="text-xl font-bold text-white">{title}</div>
      </div>
      <div id="github-corner" className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <a
          href="https://github.com/Mix-Liten/react-qr_code_generator"
          style={{ transform: 'translate(50%,-50%) rotate(45deg)' }}
          className="absolute top-0 right-0 left-0 bottom-0 text-black"
          title="View source code on GitHub"
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <title>View source code on GitHub</title>
            <path d="M0 0v100h100V0H0zm60 70.2h.2c1 2.7.3 4.7 0 5.2 1.4 1.4 2 3 2 5.2 0 7.4-4.4 9-8.7 9.5.7.7 1.3 2 1.3 3.7V99c0 .5 1.4 1 1.4 1H44s1.2-.5 1.2-1v-3.8c-3.5 1.4-5.2-.8-5.2-.8-1.5-2-3-2-3-2-2-.5-.2-1-.2-1 2-.7 3.5.8 3.5.8 2 1.7 4 1 5 .3.2-1.2.7-2 1.2-2.4-4.3-.4-8.8-2-8.8-9.4 0-2 .7-4 2-5.2-.2-.5-1-2.5.2-5 0 0 1.5-.6 5.2 1.8 1.5-.4 3.2-.6 4.8-.6 1.6 0 3.3.2 4.8.7 2.8-2 4.4-2 5-2z"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
