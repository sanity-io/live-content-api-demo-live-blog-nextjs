import { apiVersion } from './../env';
import { defineSanityFetch } from "next-sanity/live-subscription";

import {client} from './client'

export const sanityFetch = defineSanityFetch({
  client,
  searchParamKey: 'lastLiveEventId'
})