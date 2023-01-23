import {
  animate,
  animateChild,
  AnimationMetadata,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

const TRANSITION_DURATION = 300 //ms

function getRouteAnimationDefinitions(direction: string = 'left', animationDuration: number = 300): AnimationMetadata[] { //direction should be 'left' or 'right'
  let reverseMultiplier = direction === 'left' ? 1 : -1;

  let styleParent = style({position: 'relative'});
  let styleViews = query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        'z-index': '-10'
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
    transition('AllCatalogs => Homepage', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('CompanyServices => Homepage', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CompanyServices => AllCatalogs', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('CompanyInfo => Homepage', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CompanyInfo => AllCatalogs', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CompanyInfo => CompanyServices', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('CustomerSupport => Homepage', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CustomerSupport => AllCatalogs', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CustomerSupport => CompanyServices', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),
    transition('CustomerSupport => CompanyInfo', getRouteAnimationDefinitions('left', TRANSITION_DURATION)),

    transition('Homepage => AllCatalogs', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('Homepage => CompanyServices', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('Homepage => CompanyInfo', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('Homepage => CustomerSupport', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),

    transition('AllCatalogs => CompanyServices', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('AllCatalogs => CompanyInfo', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('AllCatalogs => CustomerSupport', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),

    transition('CompanyServices => CompanyInfo', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
    transition('CompanyServices => CustomerSupport', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),

    transition('CompanyInfo => CustomerSupport', getRouteAnimationDefinitions('right', TRANSITION_DURATION)),
  ]);

export const toggleHamburgerMenu =
  trigger('toggleHamburgerMenu', [
  state('open', style({
    'right': '0'
  })),
  state('closed', style({
    'right': '-180px'
  })),
  transition('* => *', [
    animate('200ms')
  ])
]);

export const toggleScrollToTopButton =
  trigger('toggleScrollToTopButton', [
    state('visible', style({
      'bottom': '1vh'
    })),
    state('not-visible', style({
      'bottom': '-100px'
    })),
    transition('* => *', [
      animate('200ms')
    ])
  ]);
