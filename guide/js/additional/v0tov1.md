# Updating from v0 to v1

### NEW Event Class!!!

```diff
+ events.active
+ events.upcoming
+ await events.getEvent()
```

### Team Checker!!!

```diff
+ await bsClient.checkTeam(brawler1, brawler2, brawler3)
```

### Other

```diff
- new bs.Client('Token')
+ new bs.Client('Token', { Options })
```
