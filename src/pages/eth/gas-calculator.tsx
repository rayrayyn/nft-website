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
            <InputContainer>
                <InputField
                    type={InputFieldTypes.number}
                    value={mintCost}
                    onChange={setMintCost}
                    placeHolder="Mint Cost"
                />
                <InputField
                    type={InputFieldTypes.number}
                    value={gasFee}
                    onChange={setGasFee}
                    placeHolder="Gas Fee (GWEI)"
                />
                <InputField
                    type={InputFieldTypes.number}
                    value={gasLimit}
                    onChange={setGasLimit}
                    placeHolder="Gas Limit"
                />
            </InputContainer>

            <div>Total Cost: {totalCost ? totalCost : 0}Ξ</div>
        </Layout>
    );
};

export default GasCalculator;

const InputContainer = styled.div``;
