/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, { SingleValue } from 'react-select';
import { useState } from 'react';

interface VendorOption {
    value: string;
    label: string;
}

const VendorFilter = () => {
    const [selectedOption, setSelectedOption] = useState<SingleValue<VendorOption>>(null);
    const options = [
        { value: 'all', label: 'All' },
        { value: 'polo', label: 'Polo' },
        { value: 'lacoste', label: 'Lacoste' },
        { value: 'guess', label: 'Guess' },
    ];


    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderColor: '#7c3aed',
            borderRadius: '0.375rem',
            padding: '0px',
            '&:hover': {
                borderColor: '#7c3aed',
            },
            '&:focus': {
                borderColor: '#7c3aed',
                boxShadow: '0 0 0 0.2rem rgba(124, 58, 237, 0.25)',
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            animation: 'fadeInDown 0.3s ease-in-out',
            backgroundColor: '#ffffff',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#7c3aed' : state.isFocused ? '#e9d8fd' : '#ffffff',
            color: state.isSelected ? '#ffffff' : '#333333',
            '&:hover': {
                backgroundColor: '#e9d8fd',
            },
        }),
    };

    return (
        <div className="mb-4">
            <h2 className="font-bold text-lg">Vendors</h2>
            <Select
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                styles={customStyles}
                placeholder="Select Vendor"
            />
        </div>
    );
};

export default VendorFilter;