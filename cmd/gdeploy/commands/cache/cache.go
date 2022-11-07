package cache

import (
	"github.com/common-fate/granted-approvals/cmd/gdeploy/commands/identity/sync"
	"github.com/urfave/cli/v2"
)

var Command = cli.Command{
	Name:        "cache",
	Description: "Utilities for managing the provider argument options cache",
	Usage:       "Utilities for managing the provider argument options cache",
	Action:      cli.ShowSubcommandHelp,
	Subcommands: []*cli.Command{
		&sync.SyncCommand,
	},
}