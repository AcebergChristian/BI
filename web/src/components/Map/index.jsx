import React, { Component, useState, useRef, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
//import axios from 'axios'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import './index.css'




const Map = () => {

    const selectref = useRef()
    const mapref = useRef()
    //const [optionval,setoptionval]


    const params = useParams();
    const getparams = params.select_val
    //selectref.current.value = getparams
    console.log(params)

    const defaultdata = () => {
        if (getparams == '0') {
            return {
                'data': [
                ],
                'geoCoordMap': {
                }
            }

        }
        else if (getparams == '1') {
            return {
                'data': [
                    { name: '海门', value: 9 },
                    { name: '鄂尔多斯', value: 12 },
                    { name: '招远', value: 12 }
                ],
                'geoCoordMap': {
                    海门: [121.15, 31.89],
                    鄂尔多斯: [109.781327, 39.608266],
                    招远: [120.38, 37.35]
                }
            }

        }
        else if (getparams == '2') {
            return {
                'data': [
                    { name: '海门', value: 9 },
                    { name: '鄂尔多斯', value: 12 },
                    { name: '招远', value: 12 },
                    { name: '舟山', value: 12 },
                    { name: '齐齐哈尔', value: 14 },
                    { name: '盐城', value: 15 }
                ],
                'geoCoordMap': {
                    海门: [121.15, 31.89],
                    鄂尔多斯: [109.781327, 39.608266],
                    招远: [120.38, 37.35],
                    舟山: [122.207216, 29.985295],
                    齐齐哈尔: [123.97, 47.33],
                    盐城: [120.13, 33.38]
                }
            }
        }
        else if (getparams == '3') {
            return {
                'data': [
                    { name: '海门', value: 9 },
                    { name: '鄂尔多斯', value: 12 },
                    { name: '招远', value: 12 },
                    { name: '舟山', value: 12 },
                    { name: '齐齐哈尔', value: 14 },
                    { name: '盐城', value: 15 },
                    { name: '赤峰', value: 16 },
                    { name: '青岛', value: 18 },
                    { name: '乳山', value: 18 },
                    { name: '金昌', value: 19 },
                    { name: '泉州', value: 21 },
                    { name: '莱西', value: 21 },
                    { name: '日照', value: 21 }
                ],
                'geoCoordMap': {
                    海门: [121.15, 31.89],
                    鄂尔多斯: [109.781327, 39.608266],
                    招远: [120.38, 37.35],
                    舟山: [122.207216, 29.985295],
                    齐齐哈尔: [123.97, 47.33],
                    盐城: [120.13, 33.38],
                    赤峰: [118.87, 42.28],
                    青岛: [120.33, 36.07],
                    乳山: [121.52, 36.89],
                    金昌: [102.188043, 38.520089],
                    泉州: [118.58, 24.93],
                    莱西: [120.53, 36.86],
                    日照: [119.46, 35.42]
                }
            }
        }
        else if (getparams == '4') {
            return {
                'data': [
                    { name: '海门', value: 9 },
                    { name: '鄂尔多斯', value: 12 },
                    { name: '招远', value: 12 },
                    { name: '舟山', value: 12 },
                    { name: '齐齐哈尔', value: 14 },
                    { name: '盐城', value: 15 },
                    { name: '赤峰', value: 16 },
                    { name: '青岛', value: 18 },
                    { name: '乳山', value: 18 },
                    { name: '金昌', value: 19 },
                    { name: '泉州', value: 21 },
                    { name: '莱西', value: 21 },
                    { name: '日照', value: 21 },
                    { name: '胶南', value: 22 },
                    { name: '南通', value: 23 },
                    { name: '拉萨', value: 24 }
                ],
                'geoCoordMap': {
                    海门: [121.15, 31.89],
                    鄂尔多斯: [109.781327, 39.608266],
                    招远: [120.38, 37.35],
                    舟山: [122.207216, 29.985295],
                    齐齐哈尔: [123.97, 47.33],
                    盐城: [120.13, 33.38],
                    赤峰: [118.87, 42.28],
                    青岛: [120.33, 36.07],
                    乳山: [121.52, 36.89],
                    金昌: [102.188043, 38.520089],
                    泉州: [118.58, 24.93],
                    莱西: [120.53, 36.86],
                    日照: [119.46, 35.42],
                    胶南: [119.97, 35.88],
                    南通: [121.05, 32.08],
                    拉萨: [91.11, 29.97]
                }
            }
        }
    }



    const [selects, setselects] = useState(defaultdata())

    const changeselect = () => {
        //console.log(selectref.current.value)
        if (selectref.current.value == '0') {
            setselects(pre => {
                return {
                    'data': [

                    ],
                    'geoCoordMap': {

                    }
                }
            })
        }
        else if (selectref.current.value == '1') {
            setselects(pre => {
                return {
                    'data': [
                        { name: '海门', value: 9 },
                        { name: '鄂尔多斯', value: 12 },
                        { name: '招远', value: 12 }
                    ],
                    'geoCoordMap': {
                        海门: [121.15, 31.89],
                        鄂尔多斯: [109.781327, 39.608266],
                        招远: [120.38, 37.35]
                    }
                }
            })
        }
        else if (selectref.current.value == '2') {
            setselects(pre => {
                return {
                    'data': [
                        { name: '海门', value: 9 },
                        { name: '鄂尔多斯', value: 12 },
                        { name: '招远', value: 12 },
                        { name: '舟山', value: 12 },
                        { name: '齐齐哈尔', value: 14 },
                        { name: '盐城', value: 15 }
                    ],
                    'geoCoordMap': {
                        海门: [121.15, 31.89],
                        鄂尔多斯: [109.781327, 39.608266],
                        招远: [120.38, 37.35],
                        舟山: [122.207216, 29.985295],
                        齐齐哈尔: [123.97, 47.33],
                        盐城: [120.13, 33.38]
                    }
                }
            })
        }
        else if (selectref.current.value == '3') {
            setselects(pre => {
                return {
                    'data': [
                        { name: '海门', value: 9 },
                        { name: '鄂尔多斯', value: 12 },
                        { name: '招远', value: 12 },
                        { name: '舟山', value: 12 },
                        { name: '齐齐哈尔', value: 14 },
                        { name: '盐城', value: 15 },
                        { name: '赤峰', value: 16 },
                        { name: '青岛', value: 18 },
                        { name: '乳山', value: 18 },
                        { name: '金昌', value: 19 },
                        { name: '泉州', value: 21 },
                        { name: '莱西', value: 21 },
                        { name: '日照', value: 21 }
                    ],
                    'geoCoordMap': {
                        海门: [121.15, 31.89],
                        鄂尔多斯: [109.781327, 39.608266],
                        招远: [120.38, 37.35],
                        舟山: [122.207216, 29.985295],
                        齐齐哈尔: [123.97, 47.33],
                        盐城: [120.13, 33.38],
                        赤峰: [118.87, 42.28],
                        青岛: [120.33, 36.07],
                        乳山: [121.52, 36.89],
                        金昌: [102.188043, 38.520089],
                        泉州: [118.58, 24.93],
                        莱西: [120.53, 36.86],
                        日照: [119.46, 35.42]
                    }
                }
            })
        }
        else if (selectref.current.value == '4') {
            setselects(pre => {
                return {
                    'data': [
                        { name: '海门', value: 9 },
                        { name: '鄂尔多斯', value: 12 },
                        { name: '招远', value: 12 },
                        { name: '舟山', value: 12 },
                        { name: '齐齐哈尔', value: 14 },
                        { name: '盐城', value: 15 },
                        { name: '赤峰', value: 16 },
                        { name: '青岛', value: 18 },
                        { name: '乳山', value: 18 },
                        { name: '金昌', value: 19 },
                        { name: '泉州', value: 21 },
                        { name: '莱西', value: 21 },
                        { name: '日照', value: 21 },
                        { name: '胶南', value: 22 },
                        { name: '南通', value: 23 },
                        { name: '拉萨', value: 24 }
                    ],
                    'geoCoordMap': {
                        海门: [121.15, 31.89],
                        鄂尔多斯: [109.781327, 39.608266],
                        招远: [120.38, 37.35],
                        舟山: [122.207216, 29.985295],
                        齐齐哈尔: [123.97, 47.33],
                        盐城: [120.13, 33.38],
                        赤峰: [118.87, 42.28],
                        青岛: [120.33, 36.07],
                        乳山: [121.52, 36.89],
                        金昌: [102.188043, 38.520089],
                        泉州: [118.58, 24.93],
                        莱西: [120.53, 36.86],
                        日照: [119.46, 35.42],
                        胶南: [119.97, 35.88],
                        南通: [121.05, 32.08],
                        拉萨: [91.11, 29.97]
                    }
                }
            })
        }
    }

    const fourtype = () => {

        const data = selects.data
        const geoCoordMap = selects.geoCoordMap

        let option;
        const convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        option = {
            title: {
                text: '全国主要城市销售数据',
                subtext: 'custom data on BaiduMap',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            bmap: {
                center: [112.114129, 35.550339],
                zoom: 5,
                roam: true,
                mapStyle: {
                    styleJson: [
                        {
                            featureType: 'water',
                            elementType: 'all',
                            stylers: {
                                color: '#d1d1d1'
                            }
                        },
                        {
                            featureType: 'land',
                            elementType: 'all',
                            stylers: {
                                color: '#f3f3f3'
                            }
                        },
                        {
                            featureType: 'railway',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                        },
                        {
                            featureType: 'highway',
                            elementType: 'all',
                            stylers: {
                                color: '#fdfdfd'
                            }
                        },
                        {
                            featureType: 'highway',
                            elementType: 'labels',
                            stylers: {
                                visibility: 'off'
                            }
                        },
                        {
                            featureType: 'arterial',
                            elementType: 'geometry',
                            stylers: {
                                color: '#fefefe'
                            }
                        },
                        {
                            featureType: 'arterial',
                            elementType: 'geometry.fill',
                            stylers: {
                                color: '#fefefe'
                            }
                        },
                        {
                            featureType: 'poi',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                        },
                        {
                            featureType: 'green',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                        },
                        {
                            featureType: 'subway',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                        },
                        {
                            featureType: 'manmade',
                            elementType: 'all',
                            stylers: {
                                color: '#d1d1d1'
                            }
                        },
                        {
                            featureType: 'local',
                            elementType: 'all',
                            stylers: {
                                color: '#d1d1d1'
                            }
                        },
                        {
                            featureType: 'arterial',
                            elementType: 'labels',
                            stylers: {
                                visibility: 'off'
                            }
                        },
                        {
                            featureType: 'boundary',
                            elementType: 'all',
                            stylers: {
                                color: '#fefefe'
                            }
                        },
                        {
                            featureType: 'building',
                            elementType: 'all',
                            stylers: {
                                color: '#d1d1d1'
                            }
                        },
                        {
                            featureType: 'label',
                            elementType: 'labels.text.fill',
                            stylers: {
                                color: '#999999'
                            }
                        }
                    ]
                }
            },
            series: [
                {
                    name: '销售量',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2];
                    },
                    encode: {
                        value: 2
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                }
            ]
        };

        return option
    }
    
    useEffect(() => {
        
        setTimeout(() => {

            let mapInstance;
            const renderedInstance = echarts.getInstanceByDom(mapref.current);
            if (renderedInstance == 'undefined') {
                mapInstance = renderedInstance;
            } else {
                mapInstance = echarts.init(mapref.current);
            }
            mapInstance.setOption(fourtype())

            // return () => {
            //     mapInstance && mapInstance.dispose();
            // };

        },100)
            
    }, [selects])

    const capat = () => {
        mapref.current.style.width = 800 + 'px'
        mapref.current.style.height = 500 + 'px'
    }

    useEffect(()=>{
        setTimeout(() => {
            capat()
        },100)
    })

    return (
        <div id="mapcontainer">
            <div className="map_select">
                数据类型
                <select className="mapselect" name="" id="" defaultValue={getparams} ref={selectref} onChange={changeselect}  >
                    <option value="0"> </option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                </select>
            </div>
            <div className="map_map" ref={mapref}>
                {/* <ReactEcharts option={mapoption()} /> */}
            </div>
        </div>
    )

}


export default Map;


