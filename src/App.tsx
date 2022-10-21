import { FormEvent, useState } from 'react'
import QRCode from 'qrcode'

import Header from './components/Header'
import InputField from './components/InputField'
import Loading from './components/Loading'
import SelectField, { SelectOption } from './components/SelectField'
import QRCodeSvg from './assets/qr-code.svg'

const sizeOptions: SelectOption[] = [
  { label: '128 x 128', value: '128' },
  { label: '192 x 192', value: '192' },
  { label: '256 x 256', value: '256' },
  { label: '384 x 384', value: '384' },
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
  const [size, setSize] = useState(sizeOptions[0].value)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [qrCode, setQrCode] = useState('')

  function onChangeUrl(str: string) {
    if (isError) setIsError(false)
    setUrl(str)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()

    if (!isUrl(url)) {
      setIsError(true)
      return
    }

    setIsLoading(true)
    generateQRCode(url, parseInt(size))

    setTimeout(() => {
      setIsLoading(false)
    }, 1e3)
  }

  function generateQRCode(url: string, size: number) {
    QRCode.toDataURL(
      url,
      {
        width: size,
        margin: 1,
        color: {
          dark: '#1f2937',
          light: '#eeeeee',
        },
      },
      (err, url) => {
        if (err) return console.error(err)

        setQrCode(url)
      }
    )
  }

  return (
    <>
      <Header title="QR Code Generator" />
      <main className="min-w-fit">
        <div className="flex flex-col-reverse justify-center m-auto md:max-w-4xl p-10 md:flex-row">
          <div className="w-full md:w-2/3 mr-24">
            <h1 className="text-3xl font-bold mb-5 md:text-4xl">QR Code Generator</h1>
            <p className="mb-4">QR Codes allow smartphone users to access your website simply and quickly.</p>
            <p>Enter your URL below to generate a QR Code and download the image.</p>

            <form id="generate-form" className="mt-4" onSubmit={e => onSubmit(e)}>
              <div className="flex flex-col gap-y-5">
                <InputField name="url" onChange={s => onChangeUrl(s)} isError={isError} isRequired />
                <SelectField name="size" options={sizeOptions} onChange={s => setSize(s)} />
              </div>

              <button type="submit" className="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-gray-800">
                Generate QR Code
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 self-center">
            <img className="w-1/2 m-auto mb-10 md:w-full" src={QRCodeSvg} alt="QRCodeSvg" />
          </div>
        </div>

        <div
          id="generated"
          className="max-w-5xl m-auto flex flex-col text-center align-center justify-center my-5 px-10"
        >
          {isLoading && <Loading />}

          {!isLoading && qrCode && (
            <>
              <img src={qrCode} className="m-auto" alt="qrcode.png" />
              <a
                id="save-link"
                className={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/2 md:w-1/3 m-auto my-5'}
                href={qrCode}
                download="qrcode"
              >
                Save Image
              </a>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App
