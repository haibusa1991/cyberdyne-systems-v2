import {animate, animateChild, AnimationMetadata, group, query, style, transition, trigger} from "@angular/animations";
import {HomepageComponent} from "./mHomepage/homepage/homepage.component";

const TRANSITION_DURATION = 300 //ms

function getAnimationDefinitions(direction: string = 'left', animationDuration: number = 300): AnimationMetadata[] { //direction should be 'left' or 'right'
  let reverseMultiplier = direction === 'left' ? 1 : -1;

  let styleParent = style({position: 'relative'});
  let styleViews = query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]
  )

  let enterElementStyle = query(':enter', [
    style({left: `${100 * reverseMultiplier * -1}%`})
  ]);

  let groupLeaveElementStyle = query(':leave', [
    animate(`${animationDuration}ms ease-in-out`, style({left: `${100 * reverseMultiplier}%`}))
  ])

  let groupEnterElementStyle = query(':enter', [
    animate(`${animationDuration}ms ease-in-out`, style({left: '0%'}))
  ]);

  return [
    styleParent,
    styleViews,
    enterElementStyle,
    // query(':leave', animateChild()), // todo uncomment when footer animation is added
    group([
      groupLeaveElementStyle,
      groupEnterElementStyle,
    ]),
  ];
}


export const mainRoutesAnimations =
  trigger('routeAnimations', [
    transition('AllCatalogs => Homepage', getAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('CompanyServices => Homepage', getAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CompanyServices => AllCatalogs', getAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('CompanyInfo => Homepage', getAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CompanyInfo => AllCatalogs', getAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CompanyInfo => CompanyServices', getAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('CustomerSupport => Homepage', getAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CustomerSupport => AllCatalogs', getAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CustomerSupport => CompanyServices', getAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CustomerSupport => CompanyInfo', getAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('Homepage => AllCatalogs', getAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('Homepage => CompanyServices', getAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('Homepage => CompanyInfo', getAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('Homepage => CustomerSupport', getAnimationDefinitions('right', TRANSITION_DURATION)),

    transition('AllCatalogs => CompanyServices', getAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('AllCatalogs => CompanyInfo', getAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('AllCatalogs => CustomerSupport', getAnimationDefinitions('right', TRANSITION_DURATION)),

    transition('CompanyServices => CompanyInfo', getAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('CompanyServices => CustomerSupport', getAnimationDefinitions('right', TRANSITION_DURATION)),

    transition('CompanyInfo => CustomerSupport', getAnimationDefinitions('right', TRANSITION_DURATION)),
  ])
