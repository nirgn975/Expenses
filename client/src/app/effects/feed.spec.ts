import { TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

import { FeedEffects } from './feed';
import { FeedService } from '../services/feed.service';

describe('FeedEffects', () => {
  const feedServiceStub = {};
  let runner: EffectsRunner;
  let feedEffects: FeedEffects;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,
    ],
    providers: [
      { provide: FeedService, useValue: feedServiceStub },
      FeedEffects,
    ]
  }));

  beforeEach(inject(
    [EffectsRunner, FeedEffects], (_runner, _feedEffects) => {
      runner = _runner;
      feedEffects = _feedEffects;
    }
  ));

  it('should create', inject([FeedEffects], (effects: FeedEffects) => {
    expect(effects).toBeTruthy();
  }));

  it('should return a LOAD_FEED_SUCCESS action after load feed', () => {
    runner.queue({ type: 'LOAD_FEED' });

    feedEffects.loadFeed$.subscribe(result => {
      expect(result).toEqual({ type: 'LOAD_FEED_SUCCESS' });
    });
  });
});
