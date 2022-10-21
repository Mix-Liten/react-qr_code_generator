import { FC } from 'react'

export type SelectOption = {
  label: string
  value: string
}

type SelectFieldProps = {
  name: string
  options: SelectOption[]
  onChange: (value: string) => void
  defaultSelect?: SelectOption
  hideLabel?: boolean
}

const SelectField: FC<SelectFieldProps> = ({ name, options, onChange, defaultSelect, hideLabel }) => {
  function selectOption(optionValue: string) {
    onChange(optionValue)
  }

  return (
    <div className="flex items-center gap-x-3">
      {!hideLabel && (
        <label className="basis-12" htmlFor={name}>
          {name}:
        </label>
      )}
      <select
        className="w-10/12 border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
        name={name}
        id={name}
        defaultValue={defaultSelect && defaultSelect.value}
        onChange={e => selectOption(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
