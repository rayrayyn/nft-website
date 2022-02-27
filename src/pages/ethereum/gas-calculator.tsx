import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { TextField, TextFieldTypes } from "../../components/TextField";
import { useRouter } from "next/router";

type QueryParamTypes = {
    mintCost?: string;
    gasLimit?: string;
    gasFee?: string;
};

const GasCalculator = () => {
    const { query }: { query: QueryParamTypes } = useRouter();

    const [totalCost, setTotalCost] = useState<number>();
    const [mintCost, setMintCost] = useState<string>();
    const [gasLimit, setGasLimit] = useState<string>();
    const [gasFee, setGasFee] = useState<string>();

    const getGasCalculation = useCallback(
        (limit, fee) => (Number(limit) * Number(fee)) / 1000000000,
        []
    );

    useEffect(() => {
        if (mintCost && gasLimit && gasFee) {
            const result = getGasCalculation(gasLimit, gasFee);
            setTotalCost(Number(mintCost) + result);
        }
    }, [mintCost, gasLimit, gasFee, getGasCalculation]);

    useEffect(() => {
        setMintCost(query.mintCost);
        setGasLimit(query.gasLimit);
        setGasFee(query.gasFee);
    }, [query]);

    return (
        <Container>
            <InputContainer>
                <TextField
                    type={TextFieldTypes.number}
                    value={mintCost}
                    onChange={setMintCost}
                    placeHolder="Mint Cost"
                />
                <TextField
                    type={TextFieldTypes.number}
                    value={gasFee}
                    onChange={setGasFee}
                    placeHolder="Gas Fee (GWEI)"
                />
                <TextField
                    type={TextFieldTypes.number}
                    value={gasLimit}
                    onChange={setGasLimit}
                    placeHolder="Gas Limit"
                />
            </InputContainer>

            {totalCost && <div>Total Cost: {totalCost}Ξ</div>}
        </Container>
    );
};

export default GasCalculator;

const Container = styled.div`
    width: 90%;
    margin: 50px auto;
    text-align: center;
`;

const InputContainer = styled.div``;
