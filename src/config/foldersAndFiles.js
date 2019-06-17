// nS - No Space
// lC - Lowercase

export function foldersAndFiles(currentAppName, newName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewName = newName.replace(/\s/g, '');
  
  return [
    path.join('ios',nS_CurrentAppName),
    path.join('ios',`${nS_CurrentAppName}-tvOS`),
    path.join('ios',`${nS_CurrentAppName}-tvOSTests`),
    path.join('ios',`${nS_CurrentAppName}.xcodeproj`),
    path.join('ios',`${nS_NewName}.xcodeproj`, 'xcshareddata', 'xcschemes', `${nS_CurrentAppName}-tvOS.xcscheme`),
    path.join('ios',`${nS_NewName}.xcodeproj`, 'xcshareddata', 'xcschemes', `${nS_CurrentAppName}.xcscheme`),
    path.join('ios',`${nS_CurrentAppName}Tests`),
    path.join('ios',`${nS_NewName}Tests`,`${nS_CurrentAppName}Tests.m`),
    path.join('ios',`${nS_CurrentAppName}.xcworkspace`),
    path.join('ios', nS_NewName, `${nS_CurrentAppName}.entitlements`),
  ];
}
