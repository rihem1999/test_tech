// src/auth/auth.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  const mockUser = { id: 1, username: 'test', password: 'test' };

  const mockAuthService = {
    login: jest.fn().mockResolvedValue({ access_token: 'token' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('should return a token on login', async () => {
    const result = await authController.login({ username: 'test', password: 'test' });
    expect(result).toEqual({ access_token: 'token' });
    expect(authService.login).toHaveBeenCalled();
  });
});
