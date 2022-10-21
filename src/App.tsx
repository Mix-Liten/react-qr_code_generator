import { FormEvent, useState } from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import SelectField, { SelectOption } from './components/SelectField'
import QRCodeSvg from './assets/qr-code.svg'

const sizeOptions: SelectOption[] = [
  { label: '128 x 128', value: '128' },
  { label: '256 x 256', value: '256' },
  { label: '512 x 512', value: '512' },
]

const isUrl = (str: string) => {
  try {
    return Boolean(new URL(str))
  } catch (e) {
    return false
  }
}

function App() {
  const [url, setUrl] = useState('')
  const [size, setSize] = useState<SelectOption>(sizeOptions[0])

  function onSubmit(e: FormEvent) {
    e.preventDefault()

    if (!isUrl(url)) console.log('data', { url, size })
  }

  return (
    <>
      <Header title="QR Code Generator" />
      <main>
        <div className="flex flex-col-reverse items-center justify-center m-auto md:max-w-4xl p-10 md:flex-row">
          <div className="w-full md:w-2/3 mr-24">
            <h1 className="text-3xl font-bold mb-5 md:text-4xl">QR Code Generator</h1>
            <p className="mb-4">QR Codes allow smartphone users to access your website simply and quickly.</p>
            <p>Enter your URL below to generate a QR Code and download the image.</p>

            <form id="generate-form" className="mt-4" onSubmit={e => onSubmit(e)}>
              <div className="flex flex-col gap-y-5">
                <InputField name="url" onChange={s => setUrl(s)} isRequired />
                <SelectField name="size" options={sizeOptions} onChange={o => setSize(o)} />
              </div>

              <button className="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black" type="submit">
                Generate QR Code
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 self-center">
            <img className="w-1/2 m-auto mb-10 md:w-full" src={QRCodeSvg} alt="QRCodeSvg" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
