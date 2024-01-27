import { describe, expect, it } from 'vitest';
import { vimock } from '../../../../test/VitestMock';
import { Contract } from './Contract';

class TestFixture {

    public readonly ipcMock = {
        RestartRPC: vimock.defunc('RestartRPC'),
        StopRPC: vimock.defunc('StopRPC'),
        SetCloudFlareBypass: vimock.defunc('SetCloudFlareBypass'),
        LoadMediaContainerFromURL: vimock.defunc('LoadMediaContainerFromURL'),
    };

    public CreateTestee() {
        return new Contract(this.ipcMock);
    }
}

describe('Contract', () => {

    describe('SetCloudFlareBypass', () => {

        it('Should invoke corresponding method on IPC', async () => {
            const fixture = new TestFixture();
            const testee = fixture.CreateTestee();
            fixture.ipcMock.SetCloudFlareBypass = vimock.func();
            await testee.SetCloudFlareBypass('+++', []);
            expect(fixture.ipcMock.SetCloudFlareBypass).toBeCalledTimes(1);
            expect(fixture.ipcMock.SetCloudFlareBypass).toBeCalledWith('+++', []);
        });
    });

    describe('LoadMediaContainerFromURL', () => {

        it('Should invoke corresponding method on IPC', async () => {
            const fixture = new TestFixture();
            const testee = fixture.CreateTestee();
            fixture.ipcMock.LoadMediaContainerFromURL = vimock.func();
            await testee.LoadMediaContainerFromURL('+++');
            expect(fixture.ipcMock.LoadMediaContainerFromURL).toBeCalledTimes(1);
            expect(fixture.ipcMock.LoadMediaContainerFromURL).toBeCalledWith('+++');
        });
    });
});