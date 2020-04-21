import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Flex, bgMainColor, centerAll, w50, h3, iranSans, fWhite, r8, bgWhite, el1, bgGray, fBlack, pad16, padV32, mV8, mV16, h4, h5, mV4, fRow, spaceB } from '../../../Values/Theme';
import irAmount from "iramount";
import { screenWidth } from '../../../Values/Constants';
import Axios from 'axios';
import { BASE_URL } from '../../../Values/Strings';
import { Indicator } from '../../../components/Indicator';
const Payment = ({ counts, total }) => {
    newTotal = new irAmount(total).digitGrouped();

    const [isLoading, setIsLoading] = useState(true);
    const [date, setDate] = useState("");

    const _getData = async () => {
        const resGetData = await Axios.get(BASE_URL + "/date");
        setDate(resGetData.data.date);
        setIsLoading(false);
    }
    useEffect(() => {
        _getData();
    }, []);


    if (isLoading) return <Indicator />;
    return (
        <View style={[Flex, centerAll, bgGray, pad16]}>
            <Text style={[iranSans, h3, fBlack, mV16]}>از اعتماد شما متشکریم </Text>
            <View style={[bgWhite, pad16, el1, { width: screenWidth / 1.2 }, r8]}>
                <Text style={[iranSans, h3, fBlack, mV8, { alignSelf: 'center' }]}>اطلاعات پرداخت</Text>

                <View style={[fRow, spaceB]}>
                    <Text style={[iranSans, h3, fBlack]}>تعداد کمپُن ها: </Text>
                    <Text style={[iranSans, h3, fBlack]}>{counts}</Text>
                </View>

                <View style={[bgGray, mV4, { height: 1, width: '100%' }]} />

                <View style={[fRow, spaceB]}>
                    <Text style={[iranSans, h3, fBlack]}>مبلغ کل پرداخت: </Text>
                    <Text style={[iranSans, h3, fBlack]}> {newTotal} تومان</Text>
                </View>

                <View style={[bgGray, mV4, { height: 1, width: '100%' }]} />

                <View style={[fRow, spaceB]}>
                    <Text style={[iranSans, h3, fBlack]}>تاریخ: </Text>
                    <Text style={[iranSans, h3, fBlack]}>{date}</Text>
                </View>
            </View>
            <Text style={[iranSans, h5, mV16, fBlack]}>پرداخت از طریق تمامی کارت های عضو شتاب</Text>
        </View>
    );

};

export default Payment;