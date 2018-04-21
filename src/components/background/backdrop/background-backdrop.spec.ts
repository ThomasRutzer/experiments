import {expect} from 'chai';
import {spy, stub, assert} from 'sinon';

import Vue from 'vue';
import {ComponentTest} from '../../../util/component-test';

import { diContainer, types } from './../../dependency-injection';

import { BackgroundBackdropComponent } from './background-backdrop';

describe('Background Backdrop', () => {
    let componentTest: ComponentTest,
        windowWidthStub,
        diContainerStub;

    before(() => {
        Vue.directive('mousemove-follow', {});

        windowWidthStub = stub(window, 'innerWidth').returns(500);
        diContainerStub = stub(diContainer, 'get')
            .withArgs(types.MediaQueryService).returns({
                on: (breakpoint, callback) => {
                        if(breakpoint.match(/\d+/g).map(Number)[0] > window.innerWidth) {
                            callback(true)
                        }
                    }
                })
            .withArgs(types.Breakpoints).returns({
                's': '480px',
                'm': '768px',
                'l': '1024px',
                'xl': '1440px'
            });

        componentTest = new ComponentTest(
            '<div><background-backdrop trigger-label="Label" ref="backdrop"></background-backdrop></div>',
            {'background-backdrop': BackgroundBackdropComponent}
        );
    });

    after(() => {
       windowWidthStub.restore();

       // @ts-ignore
       diContainer.get.restore();
    });

    it('sets given trigger label', async () => {
        componentTest.createComponent();

        await componentTest.execute((vm) => {
            expect(vm.$el.querySelectorAll('.background-backdrop__activation-trigger span')[0].textContent).to.equal('Label');
        });
    });

    it('deactivates mousemove interaction on requested breakpoints', async () => {
        componentTest.createComponent();

        await componentTest.execute((vm) => {
            // @ts-ignore  Property 'mousemoveActivated' does not exist on type 'Vue | Element | Vue[] | Element[]'.
            // Property 'mousemoveActivated' does not exist on type 'Vue'.
            expect(vm.$refs.backdrop.mousemoveActivated).to.equal(true);
        });
    });
});