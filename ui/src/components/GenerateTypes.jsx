import * as React from 'react';

export default function GenerateTypes(types) {
    const options = types.map(type => <option key={type.id} value={type.id}>{type.symbol}</option>);
    return options;
}