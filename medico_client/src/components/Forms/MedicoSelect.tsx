import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TMedicoSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  width?: string;
};

const MedicoSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
  width = "100%",
}: TMedicoSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        
        <Form.Item style={{ width: "100%" }}>
          <p className="block text-sm font-medium text-gray-700" style={{ marginBottom: "5px"}}>{label ? label : null}</p>
          <Select
            mode={mode}
            style={{ width }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default MedicoSelect;
