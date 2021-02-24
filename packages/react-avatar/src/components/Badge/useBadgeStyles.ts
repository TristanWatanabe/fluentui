import { ax, makeStyles } from '@fluentui/react-make-styles';
import { BadgeState } from './Badge.types';

const useRootStyles = makeStyles<BadgeState>([
  [
    null,
    {
      ':global(:root)': {
        '--badge-size': 'var(--badge-size-small)',
        '--badge-size-smallest': '6px',
        '--badge-size-smaller': '8px',
        '--badge-size-small': '10px',
        '--badge-size-medium': '16px',
        '--badge-size-large': '20px',
        '--badge-size-larger': '24px',
        '--badge-size-largest': '32px',

        '--badge-borderRadius': '9999px',

        // TODO this should match the parent's background color
        '--badge-glowColor': 'var(--siteVariables-colors-white, white)',

        '--badge-color': 'var(--siteVariables-colors-grey-350, rgb(151, 149, 147))',
        '--badge-iconColor': 'var(--siteVariables-colors-white, white)',
        '--badge-error-color': 'var(--siteVariables-colors-red-400, rgb(196, 49, 75))',
        '--badge-error-iconColor': 'var(--siteVariables-colors-white, white)',
        '--badge-info-color': 'var(--siteVariables-colors-brand500, rgb(151, 149, 147))',
        '--badge-info-iconColor': 'var(--siteVariables-colors-white, white)',
        '--badge-success-color': 'var(--siteVariables-colors-green200, rgb(146, 195, 83))',
        '--badge-success-iconColor': 'var(--siteVariables-colors-white, white)',
        '--badge-warning-color': 'var(--siteVariables-colors-yellow-400, rgb(248, 210, 42))',
        '--badge-warning-iconColor': 'var(--siteVariables-colors-white, white)',
      },

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      borderRadius: 'var(--badge-borderRadius)',
      borderWidth: 'var(--badge-borderWidth, calc(var(--badge-size) / 8))',
      borderStyle: 'var(--badge-borderStyle)',
      borderColor: 'var(--badge-borderColor)',
      boxShadow: '0 0 0 var(--badge-glowWidth, calc(var(--badge-size) / 8)) var(--badge-glowColor)',
      backgroundColor: 'var(--badge-color)',
      color: 'var(--badge-iconColor)',
      width: 'var(--badge-size)',
      height: 'var(--badge-size)',
    },
  ],

  [
    s => s.state === 'success',
    {
      '--badge-color': 'var(--badge-success-color)',
      '--badge-iconColor': 'var(--badge-success-iconColor)',
    },
  ],

  [
    s => s.state === 'info',
    {
      '--badge-color': 'var(--badge-info-color)',
      '--badge-iconColor': 'var(--badge-info-iconColor)',
    },
  ],
  [
    s => s.state === 'warning',
    {
      '--badge-color': 'var(--badge-warning-color)',
      '--badge-iconColor': 'var(--badge-warning-iconColor)',
    },
  ],
  [
    s => s.state === 'error',
    {
      '--badge-color': 'var(--badge-error-color)',
      '--badge-iconColor': 'var(--badge-error-iconColor)',
    },
  ],
  [
    s => s.size === 'smallest',
    {
      '--badge-size': 'var(--badge-size-smallest)',
    },
  ],
  [
    s => s.size === 'smaller',
    {
      '--badge-size': 'var(--badge-size-smaller)',
    },
  ],
  [
    s => s.size === 'small',
    {
      '--badge-size': 'var(--badge-size-small)',
    },
  ],
  [
    s => s.size === 'medium',
    {
      '--badge-size': 'var(--badge-size-medium)',
    },
  ],
  [
    s => s.size === 'large',
    {
      '--badge-size': 'var(--badge-size-large)',
    },
  ],
  [
    s => s.size === 'larger',
    {
      '--badge-size': 'var(--badge-size-larger)',
    },
  ],
  [
    s => s.size === 'largest',
    {
      '--badge-size': 'var(--badge-size-largest)',
    },
  ],
]);

const useIconStyles = makeStyles([
  [
    null,
    {
      display: 'flex',
      width: '75%',
      height: '75%',
    },
  ],
]);

export function useBadgeStyles(state: BadgeState): BadgeState {
  const rootClasses = useRootStyles(state);
  const iconClasses = useIconStyles({});

  state.className = ax(rootClasses, state.className);

  if (state.icon) {
    state.icon.className = ax(iconClasses, state.icon.className);
  }

  return state;
}
