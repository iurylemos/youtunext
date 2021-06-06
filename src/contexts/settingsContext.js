import React, { createContext, useEffect, useState } from 'react';
import THEMES from '@src/utils/constants';

const defaultSettings = {
  theme: THEMES.LIGHT,
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => {},
});

const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const restoredSettings = () => {
  const storeData = window.localStorage.getItem('settings');

  if (storeData) {
    return JSON.parse(storeData);
  }

  return null;
};

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  useEffect(() => {
    const restoreSettings = restoredSettings();

    if (restoreSettings) {
      setCurrentSettings(restoreSettings);
    }
  }, []);

  const handleSettings = (update = {}) => {
    const mergedSettings = update;

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
