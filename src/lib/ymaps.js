import React from 'react';
import ReactDom from 'react-dom';

const [ymaps3React] = await Promise.all([window.ymaps3.import('@yandex/ymaps3-reactify'), window.ymaps3.ready]);

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);
export const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = reactify.module(window.ymaps3);