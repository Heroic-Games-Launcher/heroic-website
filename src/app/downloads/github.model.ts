export interface Github {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: Author
  node_id: string
  tag_name: string
  target_commitish: TargetCommitish
  name: string
  draft: boolean
  prerelease: boolean
  created_at: Date
  published_at: Date
  assets: Asset[]
  tarball_url: string
  zipball_url: string
  body: string
  reactions: Reactions
  mentions_count?: number
  discussion_url?: string
}

export interface Asset {
  url: string
  id: number
  node_id: string
  name: string
  label: null | string
  uploader: Author
  content_type: ContentType
  state: State
  size: number
  download_count: number
  created_at: Date
  updated_at: Date
  browser_download_url: string
}

export enum ContentType {
  ApplicationOctetStream = 'application/octet-stream',
  ApplicationVndAppimage = 'application/vnd.appimage',
  ApplicationVndDebianBinaryPackage = 'application/vnd.debian.binary-package',
  ApplicationXDiskcopy = 'application/x-diskcopy',
  ApplicationXMSDOSExecutable = 'application/x-ms-dos-executable',
  ApplicationXMsdownload = 'application/x-msdownload',
  ApplicationXRPM = 'application/x-rpm',
  ApplicationXRedhatPackageManager = 'application/x-redhat-package-manager',
  ApplicationXXz = 'application/x-xz',
  ApplicationXYAML = 'application/x-yaml',
  ApplicationZip = 'application/zip',
  TextYAML = 'text/yaml',
}

export enum State {
  Uploaded = 'uploaded',
}

export interface Author {
  login: Login
  id: number
  node_id: NodeID
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: FollowingURL
  gists_url: GistsURL
  starred_url: StarredURL
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: EventsURL
  received_events_url: string
  type: Type
  site_admin: boolean
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersArieljEventsPrivacy = 'https://api.github.com/users/arielj/events{/privacy}',
  HTTPSAPIGithubCOMUsersFlavioislimaEventsPrivacy = 'https://api.github.com/users/flavioislima/events{/privacy}',
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersArieljFollowingOtherUser = 'https://api.github.com/users/arielj/following{/other_user}',
  HTTPSAPIGithubCOMUsersFlavioislimaFollowingOtherUser = 'https://api.github.com/users/flavioislima/following{/other_user}',
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersArieljGistsGistID = 'https://api.github.com/users/arielj/gists{/gist_id}',
  HTTPSAPIGithubCOMUsersFlavioislimaGistsGistID = 'https://api.github.com/users/flavioislima/gists{/gist_id}',
}

export enum Login {
  Arielj = 'arielj',
  Flavioislima = 'flavioislima',
}

export enum NodeID {
  MDQ6VXNlcjE4ODQ2NA = 'MDQ6VXNlcjE4ODQ2NA==',
  MDQ6VXNlcjI2ODcxNDE1 = 'MDQ6VXNlcjI2ODcxNDE1',
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersArieljStarredOwnerRepo = 'https://api.github.com/users/arielj/starred{/owner}{/repo}',
  HTTPSAPIGithubCOMUsersFlavioislimaStarredOwnerRepo = 'https://api.github.com/users/flavioislima/starred{/owner}{/repo}',
}

export enum Type {
  User = 'User',
}

export interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export enum TargetCommitish {
  Beta = 'beta',
  Main = 'main',
}
