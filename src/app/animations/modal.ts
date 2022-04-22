import { Animation, createAnimation } from '@ionic/angular';

export function enterAnimation(baseEl: HTMLElement): Animation {
    const wrapperAnimation = createAnimation()
        .fromTo('transform', 'translateX(-25%) scale(1)', 'translateX(0) scale(1)')
        .fromTo('opacity', 1, 1)
        .addElement(baseEl.shadowRoot.querySelector('.modal-wrapper'));

    const backdropAnimation = createAnimation()
        .beforeStyles({
            transform: 'translateY(0) scale(1)',
            opacity: .32
        })
        .addElement(baseEl.shadowRoot.querySelector('ion-backdrop'))

    return createAnimation()
        .addElement(baseEl)
        .duration(250)
        .fromTo('opacity', '0', '1')
        .addAnimation([wrapperAnimation, backdropAnimation]);
}

export function leaveAnimation(baseEl: HTMLElement, opts?: any): Animation {
    const wrapperAnimation = createAnimation()
        .fromTo('transform', 'translateX(0%) scale(1)', 'translateX(25%) scale(1)')
        .fromTo('opacity', 1, 0)
        .addElement(baseEl.shadowRoot.querySelector('.modal-wrapper'));

    const backdropAnimation = createAnimation()
        .beforeStyles({
            transform: 'translateY(0) scale(1)',
            opacity: .32
        })
        .addElement(baseEl.shadowRoot.querySelector('ion-backdrop'))

    return createAnimation()
        .addElement(baseEl)
        .duration(250)
        .fromTo('opacity', '0', '1')
        .addAnimation([wrapperAnimation, backdropAnimation]);
}

export function customAnimation(_: HTMLElement, opts: any): Animation {
    // create root transition
    const rootTransition = createAnimation()
        .duration(opts.duration || 333)
        .easing('cubic-bezier(0.7,0,0.3,1)');

    const enterTransition = createAnimation().addElement(opts.enteringEl);
    const exitTransition = createAnimation().addElement(opts.leavingEl);

    enterTransition.fromTo('opacity', '0', '1');
    exitTransition.fromTo('opacity', '1', '0');

    if (opts.direction === 'forward') {
        enterTransition.fromTo('transform', 'translateX(-1.5%)', 'translateX(0%)');
        exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(1.5%)');
    } else {
        enterTransition.fromTo('transform', 'translateX(1.5%)', 'translateX(0%)');
        exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(-1.5%)');
    }

    rootTransition.addAnimation([enterTransition, exitTransition]);
    return rootTransition;
}