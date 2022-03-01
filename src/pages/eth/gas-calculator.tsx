import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import InputField, { InputFieldTypes } from "../../components/InputField";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

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
        } else {
            setTotalCost(0);
        }
    }, [mintCost, gasLimit, gasFee, getGasCalculation]);

    useEffect(() => {
        setMintCost(query.mintCost);
        setGasLimit(query.gasLimit);
        setGasFee(query.gasFee);
    }, [query]);

    return (
        <Layout title="Gas Calculator" description="E">
            <Container>
                <InputContainer>
                    <InputField
                        type={InputFieldTypes.number}
                        value={mintCost}
                        onChange={setMintCost}
                        placeHolder="Mint Cost"
                        useLabel
                    />
                    <InputField
                        type={InputFieldTypes.number}
                        value={gasFee}
                        onChange={setGasFee}
                        placeHolder="Gas Fee (GWEI)"
                        useLabel
                    />
                    <InputField
                        type={InputFieldTypes.number}
                        value={gasLimit}
                        onChange={setGasLimit}
                        placeHolder="Gas Limit"
                        useLabel
                    />
                </InputContainer>

                <TotalCostContainer>
                    Total Cost: {totalCost ? totalCost : 0}Ξ
                </TotalCostContainer>
            </Container>
        </Layout>
    );
};

export default GasCalculator;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
`;

export const TotalCostContainer = styled.div`
    margin: 16px;
`;
