import { Animation, createAnimation } from '@ionic/angular';

export function customAnimation(_: HTMLElement, opts: any): Animation {
    // create root transition
    const rootTransition = createAnimation()
        .duration(opts.duration || 500)
        .easing('cubic-bezier(0.7,0,0.3,1)');

    const enterTransition = createAnimation().addElement(opts.enteringEl);
    const exitTransition = createAnimation().addElement(opts.leavingEl);

    enterTransition.fromTo('opacity', '0', '1');
    exitTransition.fromTo('opacity', '1', '0');

    if (opts.direction === 'forward') {
        enterTransition.fromTo('transform', 'translateX(-25.5%)', 'translateX(0%)');
        exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(25.5%)');
    } else {
        enterTransition.fromTo('transform', 'translateX(25.5%)', 'translateX(0%)');
        exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(-25.5%)');
    }

    rootTransition.addAnimation([enterTransition, exitTransition]);
    return rootTransition;
}