import * as React from 'react';
import { IState } from 'src/interface';

interface IProps { };

const initialState = {};

export default class extends React.Component<IProps, typeof initialState> {
    public state: IState<typeof initialState> = initialState;

    render() {
        return <p>Hello World</p>
    }
}