import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Label = styled.label``;
Label.Text = styled.span`
  font-size: 0.8em;
  transform: translateY(-1em);
  cursor: text;
  user-select: none;
`;

const Input = styled.input`
  padding-top: 25px;
  height: 55px;
  padding-bottom: 8px;
  &[type='color']{
    padding-top: 22px;
    padding-bottom: 10px;
    height: 57px;
  }
  &[type='textarea']{
    height: 100px;
  }
  &:not([type='color']):not(:focus) + span{
    font-size: 1em;
    transform: translateY(-0.1em)
  }
  ${({ hasValue }) => hasValue && css`
      & + span{
        font-size: 0.8em!important; 
        transform: translateY(-1em)!important;
      }
    `}
`;

function FormField({
  name, label, type, value, onChange, suggestions,
}) {
  const tag = type === 'textarea' ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);
  return (
    <div>
      <Label htmlFor={name}>
        <Input
          as={tag}
          id={name}
          type={type}
          name={name}
          className="mt-1 input"
          value={value}
          onChange={onChange}
          hasValue={hasValue}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={`suggestionFor_${name}`}
        />
        <Label.Text>{label}</Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${name}`}>
              {suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${name}_option_${suggestion}`}>
                  {suggestion}
                </option>
              ))}
            </datalist>
          )
        }
      </Label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
