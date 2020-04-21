import { TestBed } from '@angular/core/testing';

import { S3PresignedURLService } from './s3-presigned-url.service';

describe('S3PresignedURLService', () => {
  let service: S3PresignedURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3PresignedURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
