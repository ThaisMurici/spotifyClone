import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '~/store/ducks/podcasts';
import { PlayerTypes } from '~/store/ducks/player';

import {
  init, setPodcast, play, pause,
} from './player';
import { load } from './podcasts';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
  ]);
}
