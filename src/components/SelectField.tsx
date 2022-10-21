import { FC } from 'react'

export type SelectOption = {
  label: string
  value: string
}

type SelectFieldProps = {
  name: string
  options: SelectOption[]
  onChange: (value: SelectOption) => void
  defaultSelect?: SelectOption
  hideLabel?: boolean
}

const SelectField: FC<SelectFieldProps> = ({ name, options, onChange, defaultSelect, hideLabel }) => {
  function selectOption(option: SelectOption) {
    onChange(option)
  }

  return (
    <div className="flex items-center gap-x-3">
      {!hideLabel && <label className="basis-12">{name}:</label>}
      <select
        className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
        name={name}
        id={name}
        defaultValue={defaultSelect && defaultSelect.value}
      >
        {options.map(option => (
          <option key={option.value} value={option.value} onClick={() => selectOption(option)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
